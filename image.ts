export interface IImage {
  id: string;
  title: string;
  mimeType: string;
  alt?: string;
  url: string;

  placeholder: string;

  mobile: string;
  mobile2x: string;
  tablet?: string;
  tablet2x?: string;
  desktop?: string;
  desktop2x?: string;
  desktopL?: string;
  desktopL2x?: string;
  desktopXL?: string;
  desktopXL2x?: string;
  desktopXXL?: string;
  desktopXXL2x?: string;

  mobileWebp: string;
  mobile2xWebp: string;
  tabletWebp?: string;
  tablet2xWebp?: string;
  desktopWebp?: string;
  desktop2xWebp?: string;
  desktopLWebp?: string;
  desktopL2xWebp?: string;
  desktopXLWebp?: string;
  desktopXL2xWebp?: string;
  desktopXXLWebp?: string;
  desktopXXL2xWebp?: string;

  mobileAvif: string;
  mobile2xAvif: string;
  tabletAvif?: string;
  tablet2xAvif?: string;
  desktopAvif?: string;
  desktop2xAvif?: string;
  desktopLAvif?: string;
  desktopL2xAvif?: string;
  desktopXLAvif?: string;
  desktopXL2xAvif?: string;
  desktopXXLAvif?: string;
  desktopXXL2xAvif?: string;

  mobileRatioHeight: string;
  mobileRatioWidth: string;
  tabletRatioHeight?: string;
  tabletRatioWidth?: string;
  desktopRatioHeight?: string;
  desktopRatioWidth?: string;

  credit?: string;
}
