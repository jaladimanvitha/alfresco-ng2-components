/*!
 * @license
 * Copyright 2019 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PeopleApi } from './people/people-api';
import { NodesApi } from './nodes/nodes-api';
import { CommentsApi } from './comments/comments-api';
import { SitesApi } from './sites/sites-api';
import { FavoritesApi } from './favorites/favorites-api';
import { QueriesApi } from './queries/queries-api';
import { SharedLinksApi } from './shared-links/shared-links-api';
import { TrashcanApi } from './trashcan/trashcan-api';
import { SearchApi } from './search/search-api';
import { UploadApi } from './upload/upload-api';
import { AuthenticationApi } from './authentication/authentication-api';

export class RepoClient {
    constructor(
        private username: string,
        private password: string
    ) {}

    get people() {
        return new PeopleApi(this.username, this.password);
    }

    get nodes() {
        return new NodesApi(this.username, this.password);
    }

    get comments() {
        return new CommentsApi(this.username, this.password);
    }

    get sites() {
        return new SitesApi(this.username, this.password);
    }

    get favorites() {
        return new FavoritesApi(this.username, this.password);
    }

    get shared() {
        return new SharedLinksApi(this.username, this.password);
    }

    get trashcan() {
        return new TrashcanApi(this.username, this.password);
    }

    get search() {
        return new SearchApi(this.username, this.password);
    }

    get queries() {
        return new QueriesApi(this.username, this.password);
    }

    get upload() {
        return new UploadApi(this.username, this.password);
    }

    get authentication() {
        return new AuthenticationApi(this.username, this.password);
    }
}
