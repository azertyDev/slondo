export interface UserInfo {
    id: number,
    name: string,
    surname: string,
    phone: string,
    avatar: string,
    created_at: string,
    available_days: string,
    available_start_time?: string,
    available_end_time?: string
}

export type SubscriberType = {
    id: number,
    subscriber_id: number,
    user_id: number,
    user?: UserInfo,
    handleFollow: (user_id) => () => void,
}
