/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

export const NavigationItems =
{
    links: [
        {
            link: '/',
            label: 'Introduction',
            icon: '&#xE88A;',
            id: 'nav-intro'
        },
        {
            link: '/gettingstarted',
            label: 'Quick Start (Minimal)',
            icon: '&#xE871;',
            id: 'nav-gettingStarted'
        },
        {
            link: '/framework',
            label: 'Quick Start (Complete)',
            icon: '&#xE871;',
            id: 'nav-framework',
            links: [
                {
                    link: '/framework/core',
                    label: 'Framework Core',
                    icon: '&#xE162;',
                    id: 'nav-frameworkCore'
                },
                {
                    link: '/framework/auth',
                    label: 'Authorization',
                    icon: '&#xE897;',
                    id: 'nav-frameworkCore'
                },
                {
                    link: '/framework/router',
                    label: 'Router',
                    icon: '&#xE335;',
                    id: 'nav-frameworkCore'
                }
            ]
        },
        {
            link: '/setup',
            label: 'Application Setup',
            icon: '&#xE42B;',
            id: 'nav-setup',
            links: [
                {
                    link: '/setup/basestyles',
                    label: 'Base Styles',
                    icon: '&#xE3B7;',
                    id: 'nav-basestyles'
                },
                {
                    link: '/setup/layoutcomponents',
                    label: 'Layout Components',
                    icon: '&#xE875;',
                    id: 'nav-layoutcomponents'
                },
                {
                    link: '/setup/mainbasic',
                    label: 'Main vs Basic Layout',
                    icon: '&#xE42B;',
                    id: 'nav-layoutcomponents'
                },
                {
                    link: '/setup/configuration',
                    label: 'Configuration',
                    icon: 'build',
                    id: 'nav-configuration'
                },
                {
                    link: '/setup/cssprops',
                    label: 'CSS Variables',
                    icon: 'code',
                    id: 'nav-layoutcssprops'
                }
            ]
        },
        {
            link: '/components',
            label: 'Components',
            icon: '&#xE875;',
            id: 'nav-components',
            links: [
                {
                    link: '/components/alerts',
                    label: 'Alerts',
                    icon: '&#xE002;',
                    id: 'nav-alerts'
                },
                {
                    link: '/components/breadcrumb',
                    label: 'Breadcrumb Trails',
                    icon: 'view_week',
                    id: 'nav-breadcrumb'
                },
                {
                    link: '/components/buttons',
                    label: 'Buttons',
                    icon: '&#xE3C0;',
                    id: 'nav-buttons'
                },
                {
                    link: '/components/calendar',
                    label: 'Calendar',
                    icon: '&#xE878;',
                    id: 'nav-caldendar'
                },
                {
                    link: '/components/cards',
                    label: 'Cards',
                    icon: '&#xE871;',
                    id: 'nav-cards'
                },
                {
                    link: '/components/codesample',
                    label: 'Code Samples',
                    icon: '&#xE86F;',
                    id: 'nav-codesample'
                },
                {
                    link: '/components/dashboard',
                    label: 'Dashboard',
                    icon: 'dashboard',
                    id: 'nav-dashboard'
                },
                {
                    link: '/components/drawer',
                    label: 'Drawer',
                    icon: 'chrome_reader_mode',
                    id: 'nav-drawer'
                },
                {
                    link: '/components/forms',
                    label: 'Form Controls',
                    icon: 'check_box',
                    id: 'nav-form'
                },
                {
                    link: '/components/gridster',
                    label: 'Gridster',
                    icon: 'dashboard',
                    id: 'nav-gridster'
                },
                {
                    link: '/components/loginScreen',
                    label: 'Login Screen',
                    icon: '&#xE89D;',
                    id: 'nav-loginScreen'
                },
                {
                    link: '/components/login',
                    label: 'Login (Fancy)',
                    icon: '&#xE89D;',
                    id: 'nav-login'
                },
                {
                    link: '/components/logoutScreen',
                    label: 'Logout Screen',
                    icon: '&#xE89E;',
                    id: 'nav-logoutScreen'
                },
                {
                    link: '/components/kgWebMessages',
                    label: 'Messages',
                    icon: '&#xE253;',
                    id: 'nav-messages'
                },
                {
                    link: '/components/modals',
                    label: 'Modals',
                    icon: '&#xE8AA;',
                    id: 'nav-modals'
                },
                {
                    link: '/components/navigation',
                    label: 'Navigation',
                    icon: '&#xE915;',
                    id: 'nav-navigation'
                },
                {
                    link: '/components/navigationfooter',
                    label: 'Navigation Footer',
                    icon: '&#xE915;',
                    id: 'nav-navigation-footer'
                },
                {
                    link: '/components/switches',
                    label: 'Switches',
                    icon: '&#xE837;',
                    id: 'nav-switches'
                },
                {
                    link: '/components/smarttable',
                    label: 'Tables - Smart Table',
                    icon: '&#xE228;',
                    id: 'nav-smart-table-grid'
                },
                {
                    link: '/components/vaadingrid',
                    label: 'Tables - Vaadin Grid',
                    icon: '&#xE228;',
                    id: 'nav-vaadin-grid'
                },
                {
                    link: '/components/toasts',
                    label: 'Toasts',
                    icon: '&#xE8AA;',
                    id: 'nav-toasts'
                },
                {
                    link: '/components/toolbars',
                    label: 'Toolbars',
                    icon: 'build',
                    id: 'nav-toolbars'
                },
                {
                    link: '/components/utilities',
                    label: 'Utilities',
                    icon: '&#xE1BD;',
                    id: 'nav-utilities'
                }
            ]
        },
        {
            link: '/themes',
            label: 'Branding &amp; Themes',
            icon: '&#xE3B7;',
            id: 'nav-themes',
            links: [
                {
                    link: '/themes/colors',
                    label: 'Color System',
                    icon: '&#xE3B7;',
                    id: 'nav-colorSystem'
                },
                {
                    link: '/themes/themes',
                    label: 'Themes',
                    icon: '&#xE875;',
                    id: 'nav-themes'
                },
                {
                    link: '/themes/darktheme',
                    label: 'Dark Theme',
                    icon: '&#xE875;',
                    id: 'nav-darktheme'
                },
                {
                    link: '/themes/cssprops',
                    label: 'CSS Variables',
                    icon: 'code',
                    id: 'nav-themecssprops'
                }
            ]
        },
        {
            link: '/i18n',
            label: 'I18N',
            icon: '&#xE927;',
            id: 'nav-i18n'
        },
        {
            link: '/development',
            label: 'Development',
            icon: '&#xE86F;',
            id: 'nav-development',
            links: [
                {
                    link: '/development/webcomponents',
                    label: 'Web Components',
                    icon: '&#xE86F;',
                    id: 'nav-devwebcomponents'
                },
                {
                    link: '/development/angularcomponents',
                    label: 'Angular Components',
                    icon: '&#xE86F;',
                    id: 'nav-devangularcomponents'
                }
            ]
        }
    ]
};
