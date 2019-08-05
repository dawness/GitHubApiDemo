export interface Issue {
    title: string;
    body: string;
    user: {
        login: string;
    }
    assignee: {
        login: string;
    }
}
