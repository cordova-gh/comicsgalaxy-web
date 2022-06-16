import React from 'react';
import { APIGET } from '../services/api.service';
import image from '../assets/no-image.jpeg';
import './home.css';

export class Home extends React.Component {
  apiService = APIGET;
  listManga: any[] = [];
  constructor(props: any) {
    super(props);
    this.state = { mangas: this.listManga };
    this.getMangas();
  }

  async getMangas() {
    this.listManga = await (await this.apiService('comics')).data;
    this.setState({ mangas: this.listManga });
    console.log(this.listManga);
  }

  render() {
    if (!this.listManga.length) return null;
    return (
      <div className="container p-4">
        <div className="flex flex-row overflow-x-auto">
          {this.listManga.map((manga, i) => (
            <div className="w-80 h-80 rounded shadow-lg p-4 m-4">
              <div className="h-40 w-full flex justify-center">
                <img className="h-full" src={image} alt="Sunset in the mountains" />
              </div>
              <div className="h-36 px-6 py-4  mb-2 overflow-hidden truncate">
                <span className="font-bold">{manga.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
