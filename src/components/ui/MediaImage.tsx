import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib'

type MediaImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src: string
  alt: string
  /** Classes on the wrapper that owns the layout box. */
  wrapperClassName?: string
  /** Absolute fill of a positioned parent (common for cover heroes / cards). */
  fill?: boolean
}

/**
 * Content image with a same-size mist skeleton until load, then a short fade-in.
 * Skip for tiny icons / logos / watermarks — use raw &lt;img&gt; there.
 */
export function MediaImage({
  src,
  alt,
  className,
  wrapperClassName,
  fill = false,
  loading = 'lazy',
  onLoad,
  ...rest
}: MediaImageProps) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    const img = ref.current
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  return (
    <div
      className={cn(
        'overflow-hidden',
        fill ? 'absolute inset-0 size-full' : 'relative size-full',
        wrapperClassName,
      )}
    >
      {!loaded ? (
        <span
          className="absolute inset-0 animate-pulse bg-mist"
          aria-hidden="true"
        />
      ) : null}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={(event) => {
          setLoaded(true)
          onLoad?.(event)
        }}
        className={cn(
          'transition-opacity duration-500 ease-out',
          loaded ? 'opacity-100' : 'opacity-0',
          fill && 'size-full object-cover',
          className,
        )}
        {...rest}
      />
    </div>
  )
}
