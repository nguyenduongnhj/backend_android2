import { ResponseError, ResponseSuccess } from 'src/commons/dtos/response.dto';
import { CreatePostDto } from 'src/commons/dtos/post/post.dto';
import { PostsService } from 'src/services/posts/posts.service';
export declare class PostController {
    service: PostsService;
    constructor(service: PostsService);
    getListPost(page: any, req: any): Promise<ResponseSuccess>;
    validate(postDto: CreatePostDto): boolean;
    getDetail(params: any, req: any): Promise<ResponseSuccess>;
    savePost(postDto: CreatePostDto, req: any): Promise<ResponseError | ResponseSuccess>;
    getListPostByIdUser(params: any, page: any): Promise<ResponseSuccess>;
    deletePost(): Promise<void>;
    updatePost(postDto: CreatePostDto, params: any, req: any): Promise<ResponseError | ResponseSuccess>;
    like(params: any, req: any): Promise<any>;
    dislike(params: any, req: any): Promise<any>;
}
