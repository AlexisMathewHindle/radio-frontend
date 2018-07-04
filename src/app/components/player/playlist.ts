export class Playlist {
  constructor (
    public showTitle: string,
    public showStart: string,
    public showFinish: string,
  ) {
    this.showTitle = showTitle;
    this.showStart = showStart;
    this.showFinish = showFinish;
  }
}
