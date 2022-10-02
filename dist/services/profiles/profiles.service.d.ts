import { Profile } from 'src/database/models/profile.model';
export declare class ProfilesService {
    getUserProfile(userId: String): Promise<Profile>;
}
