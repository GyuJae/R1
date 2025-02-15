import { describe, expect, it } from 'vitest';
import { PlatformType } from './platform-type';

describe('PlatformType', () => {
  it('안드로이드와 IOS 앱은 앱으로 분류된다.', () => {
    expect(PlatformType.IOS_APP.isApp()).toBeTruthy();
    expect(PlatformType.ANDROID_APP.isApp()).toBeTruthy();
    expect(PlatformType.WEB.isApp()).toBeFalsy();
  });
});
