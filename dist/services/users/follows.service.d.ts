import { Paginate } from 'src/commons/interfaces/paginate.interface';
export declare class FollowsService {
    findAllFollowingsOfUser(followerId: String, page?: number, limit?: number): Promise<Paginate>;
    findAllFollowersOfUser(followingId: String, page?: number, limit?: number): Promise<Paginate>;
    followUser(followerId: String, followId: String): Promise<boolean>;
    unFollowUser(followerId: String, followingId: String): Promise<boolean>;
    checkFollowingUser(followerId: String, followingId: String): Promise<boolean>;
}
