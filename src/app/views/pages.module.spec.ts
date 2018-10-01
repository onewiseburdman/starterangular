import { viewsModule } from './views.module';

describe('viewsModule', () => {
  let gluesModule: viewsModule;

  beforeEach(() => {
    gluesModule = new viewsModule();
  });

  it('should create an instance', () => {
    expect(gluesModule).toBeTruthy();
  });
});
