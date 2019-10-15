import * as React from 'react';

import { Icon } from '@ridi/rsg';

import { GridArticleList } from 'app/components/GridArticleList';
import { ArticleListMockUp } from 'app/utils/mock';

export const ArticleChannelList: React.FunctionComponent = () => {
  return (
    <section>
      <div className="ArticlePageChannelList_Wrap">
        <ul className="ArticlePageChannelList">
          <li className="ArticlePageChannel">
            <div className="Channel_Info">
              <div className="Channel_Thumbnail">
                <img src={''} className="Channel_Image" />
              </div>
              <div className="Channel_Meta">
                <span className="Channel_Title">이코노미스트</span>
                <span className="Channel_Desc">다양하고 유익한 경제정보</span>
              </div>
              <button className="Channel_Follow">
                <Icon name="plus_1" className="Follow_Icon" />
                팔로우
              </button>
            </div>
            <div className="Channel_ArticleList">
              <GridArticleList
                pageTitleForTracking="article-channel-list"
                uiPartTitleForTracking="article-channel-list-articles"
                renderAuthor={false}
                articles={ArticleListMockUp}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
