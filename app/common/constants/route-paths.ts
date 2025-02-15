import { Enum, EnumType } from 'ts-jenum';

@Enum('path')
export class RoutePaths extends EnumType<RoutePaths>() {
  static readonly HOME = new RoutePaths('', '처음 페이지 아직 정해진게 없음');
  static readonly AUTH = new RoutePaths('auth', '계정');
  static readonly ALBUMS = new RoutePaths('albums', '앨범');
  static readonly ALBUM = new RoutePaths('albums/:id', '앨범 상세 페이지');

  private constructor(
    public readonly path: string,
    private readonly name: string,
  ) {
    super();
  }

  static GetDetailAlbumPath(albumId: string) {
    return `/albums/${albumId}`;
  }
}
