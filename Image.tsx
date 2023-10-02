'use client';

import type { CSSProperties, FC } from 'react';
import { useRef } from 'react';

import { useInView } from 'framer-motion';

import { BREAKPOINTS } from '@/constants/breakpoints';
import type { IImage } from '@/interfaces/image';
import { css } from '@/styled-system/css';
import { SystemStyleObject } from '@/styled-system/types/system-types';

interface ImageProps {
  image: IImage;
  isLazyload?: boolean;
  withCredits?: boolean;
  css?: SystemStyleObject;
}

export const Image: FC<ImageProps> = ({
  image,
  isLazyload = true,
  withCredits = false,
  css: cssProps,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '200px' });

  if (!image) return null;

  const {
    placeholder,
    mobile,
    mobile2x,
    tablet,
    tablet2x,
    desktop,
    desktop2x,
    desktopL,
    desktopL2x,
    desktopXL,
    desktopXL2x,
    desktopXXL,
    desktopXXL2x,
    mobileWebp,
    mobile2xWebp,
    tabletWebp,
    tablet2xWebp,
    desktopWebp,
    desktop2xWebp,
    desktopLWebp,
    desktopL2xWebp,
    desktopXLWebp,
    desktopXL2xWebp,
    desktopXXLWebp,
    desktopXXL2xWebp,
    mobileAvif,
    mobile2xAvif,
    tabletAvif,
    tablet2xAvif,
    desktopAvif,
    desktop2xAvif,
    desktopLAvif,
    desktopL2xAvif,
    desktopXLAvif,
    desktopXL2xAvif,
    desktopXXLAvif,
    desktopXXL2xAvif,
    title,
    alt,
    credit,
  } = image;

  const ratioStyles = {
    '--mobile-ratio-width': image.mobileRatioWidth,
    '--mobile-ratio-height': image.mobileRatioHeight,
    '--tablet-ratio-width': image.tabletRatioWidth,
    '--tablet-ratio-height': image.tabletRatioHeight,
    '--desktop-ratio-width': image.desktopRatioWidth,
    '--desktop-ratio-height': image.desktopRatioHeight,
  } as CSSProperties;

  const shouldLoadImages = !isLazyload || isInView;

  return (
    <div
      ref={ref}
      style={ratioStyles}
      className={css({
        maxH: '100%',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        aspectRatio: {
          base: 'var(--mobile-ratio-width) / var(--mobile-ratio-height)',
          sm: 'var(--tablet-ratio-width) / var(--tablet-ratio-height)',
          md: 'var(--desktop-ratio-width) / var(--desktop-ratio-height)',
        },
        ...cssProps,
      })}
    >
      <picture>
        {desktopXXL && (
          <source
            srcSet={shouldLoadImages ? `${desktopXXLAvif} 1x, ${desktopXXL2xAvif} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS['2xl']})`}
            type="image/avif"
          />
        )}

        {desktopXL && (
          <source
            srcSet={shouldLoadImages ? `${desktopXLAvif} 1x, ${desktopXL2xAvif} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.xl})`}
            type="image/avif"
          />
        )}

        {desktopL && (
          <source
            srcSet={shouldLoadImages ? `${desktopLAvif} 1x, ${desktopL2xAvif} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.lg})`}
            type="image/avif"
          />
        )}

        {desktopWebp && (
          <source
            srcSet={shouldLoadImages ? `${desktopAvif} 1x, ${desktop2xAvif} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.md})`}
            type="image/avif"
          />
        )}

        {tablet && (
          <source
            srcSet={shouldLoadImages ? `${tabletAvif} 1x, ${tablet2xAvif} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.sm})`}
            type="image/avif"
          />
        )}
        {desktopXXL && (
          <source
            srcSet={shouldLoadImages ? `${desktopXXLWebp} 1x, ${desktopXXL2xWebp} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS['2xl']})`}
            type="image/webp"
          />
        )}

        {desktopXL && (
          <source
            srcSet={shouldLoadImages ? `${desktopXLWebp} 1x, ${desktopXL2xWebp} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.xl})`}
            type="image/webp"
          />
        )}

        {desktopL && (
          <source
            srcSet={shouldLoadImages ? `${desktopLWebp} 1x, ${desktopL2xWebp} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.lg})`}
            type="image/webp"
          />
        )}

        {desktopWebp && (
          <source
            srcSet={shouldLoadImages ? `${desktopWebp} 1x, ${desktop2xWebp} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.md})`}
            type="image/webp"
          />
        )}

        {tablet && (
          <source
            srcSet={shouldLoadImages ? `${tabletWebp} 1x, ${tablet2xWebp} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.sm})`}
            type="image/webp"
          />
        )}

        {desktopXXL && (
          <source
            srcSet={shouldLoadImages ? `${desktopXXL} 1x, ${desktopXXL2x} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS['2xl']})`}
            type="image/jpeg"
          />
        )}

        {desktopXL && (
          <source
            srcSet={shouldLoadImages ? `${desktopXL} 1x, ${desktopXL2x} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.xl})`}
            type="image/jpeg"
          />
        )}

        {desktopL && (
          <source
            srcSet={shouldLoadImages ? `${desktopL} 1x, ${desktopL2x} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.lg})`}
            type="image/jpeg"
          />
        )}

        {desktop && (
          <source
            srcSet={shouldLoadImages ? `${desktop} 1x, ${desktop2x} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.md})`}
            type="image/jpeg"
          />
        )}

        {tablet && (
          <source
            srcSet={shouldLoadImages ? `${tablet} 1x, ${tablet2x} 2x` : ''}
            media={`(min-width: ${BREAKPOINTS.sm})`}
            type="image/jpeg"
          />
        )}

        <source
          srcSet={shouldLoadImages ? `${mobileAvif} 1x, ${mobile2xAvif} 2x` : ''}
          type="image/avif"
        />

        <source
          srcSet={shouldLoadImages ? `${mobileWebp} 1x, ${mobile2xWebp} 2x` : ''}
          type="image/webp"
        />

        <source srcSet={shouldLoadImages ? `${mobile} 1x, ${mobile2x} 2x` : ''} type="image/jpeg" />

        <img
          // eslint-disable-next-line react/no-unknown-property
          fetchPriority="high"
          src={placeholder || mobile}
          sizes="auto"
          // className={shouldLoadImages ? 'loaded' : undefined}
          className={css({
            width: 'full',
            height: 'full',
            objectFit: 'cover',
            filter: shouldLoadImages ? 'blur(10px)' : 'none',
            transition: 'opacity 0.25s ease-in-out, filter 0.25s ease-in-out',
          })}
          alt={alt || title}
        />
      </picture>
      {withCredits && credit && (
        <span>
          <p>{credit}</p>
        </span>
      )}
    </div>
  );
};
