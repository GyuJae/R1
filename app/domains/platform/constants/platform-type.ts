import { Enum, EnumType } from 'ts-jenum';

@Enum('name')
export class PlatformType extends EnumType<PlatformType>() {
  static readonly WEB = new PlatformType('WEB');
  static readonly IOS_APP = new PlatformType('IOS_APP');
  static readonly ANDROID_APP = new PlatformType('ANDROID_APP');

  private constructor(public readonly name: string) {
    super();
  }

  isApp() {
    return this === PlatformType.IOS_APP || this === PlatformType.ANDROID_APP;
  }
}
