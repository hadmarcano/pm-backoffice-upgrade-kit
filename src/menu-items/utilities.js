// assets
import {
    AppstoreAddOutlined,
    UserOutlined,
    QrcodeOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    KeyOutlined,
    ScanOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    UserOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    KeyOutlined,
    ScanOutlined,
    QrcodeOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-onboarding',
            title: 'OnBoarding',
            type: 'item',
            url: '/onboarding',
            icon: icons.QrcodeOutlined
        },
        {
            id: 'util-login',
            title: 'Logged',
            type: 'item',
            url: '/logged',
            icon: icons.UserOutlined
        },
        {
            id: 'util-sign',
            title: 'Signed',
            type: 'item',
            url: '/signed',
            icon: icons.ScanOutlined
        },
        {
            id: 'util-keys',
            title: 'Api-keys',
            type: 'item',
            url: '/apikey',
            icon: icons.KeyOutlined,
            // breadcrumbs: false
        }
    ]
};

export default utilities;