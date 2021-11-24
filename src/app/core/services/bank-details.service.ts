import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankDetails } from 'src/app/shared/models/bank-details';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BankDetailsService {
  constructor(private http: HttpClient) {}
  sourceUrl = environment.sourceUrl;

  // save bank details
  saveBankDetails(bank_name, branch_name, account_number) {
    return this.http.post(
      `${this.sourceUrl}/human-resource/api/bank_details/`,
      {
        account_number: account_number,
        bank_name: bank_name,
        branch_name: branch_name,
      }
    );
  }
}
