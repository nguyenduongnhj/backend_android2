import { HttpException } from '@nestjs/common';
import { FollowsService } from 'src/services/users/follows.service';
import { IResponse } from 'src/commons/interfaces/response.interface';
import { FollowDto } from 'src/commons/dtos/follow/follow.dto';
export declare class FollowersController {
    private followsService;
    constructor(followsService: FollowsService);
    postFollowUser(followDto: FollowDto, req: any): Promise<IResponse | HttpException>;
    postUnFollowUser(followDto: FollowDto, req: any): Promise<IResponse>;
    checkFollowingOneUser(req: any, followingId: String): Promise<any>;
}
