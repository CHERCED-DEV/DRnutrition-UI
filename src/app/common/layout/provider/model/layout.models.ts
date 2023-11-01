import {
  ButtonGeneralConfig,
  ImgsConfig,
  InputConfig,
  LinkConfig,
} from '../../../../shared/models/shareable.interface';

/* 
    General Layout Settings 
*/

export interface RoutesMenuNavConfig {
  path: string;
  label: string;
}

/* 
    HeaderConfigs 
*/

export interface AlertsConfig {
  main_text: string;
  label: string;
  link: LinkConfig[];
}

export interface SearchConfig {
  input: InputConfig;
  button: string;
}

export interface HeaderConfig {
  brand_logo: ImgsConfig;
  search: SearchConfig[];
  alert: AlertsConfig[];
  user_panel: LinkConfig[];
  cultures: string[];
}

/*
    FooterConfigs  
*/

export interface socialMediaConfig {
  link: LinkConfig[];
  img: ImgsConfig;
}

export interface copyrightConfig {
  title: string;
  img: ImgsConfig;
}

export interface FooterConfig {
  brand_logo: ImgsConfig;
  nav_menu: LinkConfig[];
  newsletter: ButtonGeneralConfig;
  socialmedia: socialMediaConfig;
  copyright: copyrightConfig;
}
