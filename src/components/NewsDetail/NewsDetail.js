import React from 'react';
import './NewsDetail.css';
import { withRouter } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle.js';
import NewsDate from '../NewsDate/NewsDate.js'
import getHostFromUrl from '../../modules/getHostFromUrl.js'
import getDayFromStringDate from '../../modules/getDayFromStringDate.js'
import getMonthFromStringDate from '../../modules/getMonthFromStringDate.js'
import cutSourceOfNews from '../../modules/cutSourceOfNews.js'



const NewsDetail = props => {

	const id = props.match.params.id;
	const newsArr = props.newsItems;
	//console.log(newsArr[0]);

	return (
		< div className="news-detail" >
			{newsArr && (
				<div className="container">
					<div className="news-wrapper">
						<div className="about">
							<PageTitle
								title={cutSourceOfNews(newsArr[id].title)}
							/>
							<a href={newsArr[id].url} className="about__source" target="_blank">{getHostFromUrl(newsArr[id].url)}</a>
							<NewsDate
								day={getDayFromStringDate(newsArr[id].publishedAt)}
								month={getMonthFromStringDate(newsArr[id].publishedAt)}
							/>
						</div>
						<div className="content">
							<img src={newsArr[id].urlToImage} className="content__img" alt="img" />
							<p className="content__text">{newsArr[id].content}</p>
						</div>
					</div>
				</div>
			)}
		</div >
	)
}

export default withRouter(NewsDetail);