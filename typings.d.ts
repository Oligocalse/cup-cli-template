declare module 'swiper';

declare module '*.css';
declare module '*.less';

declare module '*.js';
declare module '*.ts';

declare module '*.jsx';
declare module '*.tsx';

declare module "*.png";
declare module "*.jpg";
declare module "*.webp";
declare module "*.gif";
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
