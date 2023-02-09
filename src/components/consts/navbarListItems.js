
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PermIdentityOutlinedIcon />,
        label: 'Мои клиенты',
        route: 'teacher/customers'
    },

    {
        id: 1,
        icon: <CalendarMonthOutlinedIcon />,
        label: 'Моё расписание',
        route: 'teacher/customers'
    },

    {
        id: 2,
        icon: <CurrencyRubleOutlinedIcon />,
        label: 'Моя оплата',
        route: 'salary'
    },

    {
        id: 3,
        icon: <CalendarMonthOutlinedIcon />,
        label: 'Расписание',
        route: 'lesson/list'
    },

    {
        id: 5,
        icon: <PermIdentityOutlinedIcon />,
        label: 'Клиенты',
        route: 'customer/list'
    },

    {
        id: 6,
        icon: <TaskOutlinedIcon />,
        label: 'Задачи',
        route: 'uikit/main'
    },


    {
        id: 8,
        icon: <FolderSharedOutlinedIcon />,
        label: 'Сотрудники',
        route: 'employee/employeelist'
    },

    {
        id: 9,
        icon: <CurrencyRubleOutlinedIcon />,
        label: 'Продажи',
        route: 'tariff/list'
    },

    {
        id: 10,
        icon: <StarOutlineOutlinedIcon />,
        label: 'Продукт',
        route: 'program/list'
    },

    {
        id: 11,
        icon: <DescriptionOutlinedIcon />,
        label: 'Отчёты',
        route: 'route/reports'
    },

    {
        id: 12,
        icon: <CalendarMonthOutlinedIcon />,
        label: 'Табло',
        route: 'dashboard/index'
    },


]