import { CreateCommentDto } from 'src/commons/dtos/comment/comment.dto';
import { ResponseSuccess } from 'src/commons/dtos/response.dto';
import { CommentsService } from 'src/services/comments/comments.service';
export declare class CommentsController {
    service: CommentsService;
    constructor(service: CommentsService);
    getListComment(params: any, page: any, req: any): Promise<ResponseSuccess>;
    savePost(req: any, commentDto: CreateCommentDto): Promise<ResponseSuccess>;
}
