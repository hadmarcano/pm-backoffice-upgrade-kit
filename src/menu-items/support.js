// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};


// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
        {
            id: 'policies',
            title: 'Politicas y Condiciones',
            type: 'item',
            url: '/policies',
            icon: icons.ChromeOutlined
        },
        {
            id: 'questions',
            title: 'Preguntas Frecuentes',
            type: 'item',
            // url: 'https://**********/',
            url: '/questions',
            icon: icons.QuestionOutlined,
            // external: true,
            // target: true
        }
    ]
};

export default support;