import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminService);

  });

  it('Test adminLogin to return an expected value ', () => {
    let isValidData = service.adminLogin('admin@admin.com', '123456');
    expect(isValidData).toBeTrue();
  });
  it('Test if user is loggedin when token is stored', () => {
    service.storeToken();
    expect(service.isLogged()).toBeTrue();
  })
  it('Test if user is loggedout when token is removed ', () => {
    service.logout();
    expect(service.isLogged()).toBeFalse();
  })
  it('Test getLoggedStatus return a valid value or not ', () => {
    service.logout();

    let isLogged = service.isLogged();
    service.getLoggedStatus().subscribe(status => {
      isLogged = status;
    });
    expect(isLogged).toBe(false);

  })

});
