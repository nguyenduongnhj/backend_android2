import { CreateCommentDto } from 'src/commons/dtos/comment/comment.dto';
export declare class CommentsService {
    getListComment(id: any, page: number): Promise<{
        data: any[];
        next_page: string;
        prev_page: string;
    }>;
    saveComment(user_id: any, commentDto: CreateCommentDto): Promise<any>;
    updateComment(user_id: any, commentDto: CreateCommentDto): Promise<any>;
}
