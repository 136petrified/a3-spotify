import { ResourceData } from './resource-data';

export class ArtistData extends ResourceData {
	genres:string[];
	followers:number;

	constructor(objectModel:any) {
		super(objectModel);
		this.category = 'artist';
		this.genres = objectModel['genres'];
		if('followers' in objectModel) {
			this.followers = objectModel['followers']['total'];
		}
	}

	get followersStr() {
		return this.followers.toLocaleString();
	}

    get commaFormattedFollowers() {
        let s:string = this.followers.toString();
        for (let i = s.length - 1; i >= 0; i -= 3) {
            if (i != s.length - 1) {
                s = s.substring(0, i + 1)+ ',' + s.substring(i, s.length);
            }
        }

        return s;
    }
}
