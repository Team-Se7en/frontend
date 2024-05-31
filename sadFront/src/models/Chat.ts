export interface ChatModel {
    id: number;
    group_name: string;
    part_of_last_message: string;
    time_of_the_last_message: string;
    person_of_the_last_message: string;
    chat_enable: boolean;
    unseen_messages_flag: string;
}

export interface AllowedChats {
    id: number;
    name: string;
    university: string;
}