import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    // This object is a different instance from fixture.componentInstance
    component = new AppComponent(); // instance only; no HTML elements
    fixture = TestBed.createComponent(AppComponent); // instance and HTML elements
  }));

  it('should create the app component', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have team name', () => {
    expect(component.title).toEqual('Team Dipper');
  });

  it('should have team logo image', () => {
    expect(component.logo).toBeDefined();
  });

  it('should have team slogan', () => {
    expect(component.slogan).toBeDefined();
  });

  it('should have team biography', () => {
    expect(component.bio).toBeDefined();
  });

  it('should render team name to the toolbar', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain('Team Dipper');
  });

  it('should render team name to the header', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content h1').textContent).toContain('Team Dipper');
  });

  it('should render team bio section to the view', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('section.bio p').innerText).toContain(component.bio);
  });

  it('should render team contact link to the view', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('section.slogan h2').innerText).toContain(component.slogan);
  });
});
