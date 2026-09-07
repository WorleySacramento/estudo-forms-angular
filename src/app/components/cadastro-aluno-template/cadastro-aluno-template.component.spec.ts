import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlunoTemplateComponent } from './cadastro-aluno-template.component';

describe('CadastroAlunoTemplateComponent', () => {
  let component: CadastroAlunoTemplateComponent;
  let fixture: ComponentFixture<CadastroAlunoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAlunoTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAlunoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
