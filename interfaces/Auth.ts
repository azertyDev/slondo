export interface UserInfo {
    id: number,
    name: string,
    surname: string,
    phone: string,
    avatar: string,
    created_at: string,
    available_days: string
}

export type SubscriberType = {
    id: number,
    subscriber_id: number,
    user_id: number,
    user?: UserInfo,
    handleFollow: (user_id) => () => void,
    isOwner: boolean
}
