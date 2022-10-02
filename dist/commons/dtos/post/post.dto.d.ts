import Content from "src/commons/interfaces/post/content.interface";
export declare class CreatePostDto {
    readonly user_id: String;
    readonly content: Content;
    readonly total_like: Number;
    readonly total_comment: Number;
}
