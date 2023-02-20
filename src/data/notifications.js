export const notifications = [

    {
        id: 0,
        isActive: true,
        notificationHeader: "Напоминание о регулярном уроке",
        notificationDescription: "Отправляется для регулярного урока в 15:00 дня, предшествующего уроку, или немного позднее, в режиме очереди.",
        templateHeader: "Уведомление о регулярном уроке",
        templateText: "Добрый день! Это Ольга, ваш куратор из школы музыки Guitardo😊 Пишу напомнить, что у вас занятие {date} в {time} на {lessonName} Если все верно, напишите «+» или любой смайлик🤍",
        templateWabaID: "napominanie_ob_ocherednom_uroke_06_01_2023",
        sendingChannels: ['wa', 'email', 'sms'],
        sendToFirstAvailable: true,
        smsTemplate: '',
        emailHeader: '',
        emailTemplate: '',
    },

    {
        id: 1,
        isActive: false,
        notificationHeader: "Ссылка на оферту при первом платеже",
        notificationDescription: "Отправляется в момент поступления первого платежа по абонементу",
        templateHeader: "Отправка оферты кнопкой",
        templateText: "Направляем Вам ссылку на договор-оферту. Обращаем внимание на условия о согласии с данным договором, указанные в п. 1.3.2 {contractUrl}",
        templateWabaID: "notification_oferta_08_12_22",
        sendingChannels: [false, 'email', 'sms'],
        sendToFirstAvailable: false,
        smsTemplate: '',
        emailHeader: '',
        emailTemplate: '',
    },

    {
        id: 2,
        isActive: false,
        notificationHeader: "Отправка оферты кнопкой",
        notificationDescription: "Отправляется в момент поступления первого платежа по абонементу",
        templateHeader: "Отправка оферты кнопкой",
        templateText: "Направляем Вам ссылку на договор-оферту. Обращаем внимание на условия о согласии с данным договором, указанные в п. 1.3.2 {contractUrl}",
        templateWabaID: "notification_oferta_08_12_22",
        sendingChannels: [false, 'email', 'sms'],
        sendToFirstAvailable: true,
        smsTemplate: '',
        emailHeader: '',
        emailTemplate: '',
    },



    {
        id: 3,
        isActive: true,
        notificationHeader: "Уведомление о записи на промо урок",
        notificationDescription: "Отправляется в момент записи клиента на промо-урок",
        templateHeader: "Уведомление о записи на промо урок",
        templateText: "Вы записаны на урок {lessonName} {date} в {time}. Урок пройдет по адресу: м.Сухаревская/Цветной бульвар. Пушкарев пер. 22с2, (карта https://guitardo.ru/karta ). +79587091573",
        templateWabaID: "zapisany_na_probny_15_09_22",
        sendingChannels: ['wa', 'email', 'sms'],
        sendToFirstAvailable: false,
        smsTemplate: '',
        emailHeader: '',
        emailTemplate: '',
    },
]