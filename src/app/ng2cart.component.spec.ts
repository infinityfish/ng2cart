import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2cartAppComponent } from '../app/ng2cart.component';

beforeEachProviders(() => [Ng2cartAppComponent]);

describe('App: Ng2cart', () => {
  it('should create the app',
      inject([Ng2cartAppComponent], (app: Ng2cartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2cart works!\'',
      inject([Ng2cartAppComponent], (app: Ng2cartAppComponent) => {
    expect(app.title).toEqual('ng2cart works!');
  }));
});
