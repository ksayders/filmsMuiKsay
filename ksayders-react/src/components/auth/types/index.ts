export interface PropsRequest {
    onRequest: (email: string) => void;
    onCancel: () => void;
}

export interface PropsConfirm {
    onCancel: () => void;
    onConfirm: (token: string) => void;
}