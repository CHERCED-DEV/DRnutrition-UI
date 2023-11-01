import {
  ButtonGeneralConfig,
  ImgsConfig,
  InputConfig,
  LinkConfig,
} from '../../../../shared/models/shareable.interface';

export interface RoutesMenuNavConfig {
  path: string;
  label: string;
}

export interface HeaderConfig {
  brand_logo: ImgsConfig;
  search: {
    input: InputConfig;
    button: string;
  };
  alert: [
    {
      main_text: string;
      label: string;
      link: LinkConfig[];
    }
  ];
  user_panel: LinkConfig[];
  cultures: string[];
}

export interface FooterConfig {
  brand_logo: ImgsConfig;
  nav_menu: LinkConfig[];
  newsletter: ButtonGeneralConfig;
  socialmedia: {
    link: LinkConfig[];
    img: ImgsConfig;
  };
  copyright: string;
}
