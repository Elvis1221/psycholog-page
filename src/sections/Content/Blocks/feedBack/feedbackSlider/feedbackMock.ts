export interface Feedback {
    name: string;
    message: string;
    email: string;
}

export const feedbackMock: Feedback[] = [
    {
        email: 'email1@mail.com',
        name: 'Ivan',
        message:
            'lorem   lorem    lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd  lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd',
    },
    {
        email: 'email2@mail.com',
        name: 'Andrei',
        message:
            'lorem   lorem    lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd  lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd',
    },
    {
        email: 'email12@mail.com',
        name: 'Ihar',
        message:
            'lorem   lorem    lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd  lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd',
    },
    {
        email: 'email3@mail.com',
        name: 'Dima',
        message:
            'lorem   lorem    lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd  lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   lorem         ssssssssssssssad asd asd sdasdasd asd asda sd sadasd   ssssssssssssssad asd asd sdasdasd asd asda sd sadasd',
    },
];
