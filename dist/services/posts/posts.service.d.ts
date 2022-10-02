import { CreatePostDto } from 'src/commons/dtos/post/post.dto';
export declare class PostsService {
    savePost(postDto: CreatePostDto, userId: any): Promise<any>;
    getListPost(page: number, idUser: any): Promise<{
        data: any[];
        next_page: string;
        prev_page: string;
    }>;
    deletePost(idPost: any): Promise<any>;
    getListPostById(idUser: any, page: number): Promise<{
        data: any[];
        next_page: string;
        prev_page: string;
    }>;
    getDetail(idPost: any, idUser: any): Promise<any>;
    saveVideo(idPost: any, data: [String]): Promise<any>;
    saveImage(idPost: any, data: [String]): Promise<any>;
    updatePost(idPost: any, postDto: CreatePostDto): Promise<any>;
    like(idPost: any, idUser: any): Promise<any>;
    dislike(idPost: any, idUser: any): Promise<any>;
    isLike(idPost: any, idUser: any): Promise<any>;
}
