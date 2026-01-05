import { httpRequest } from "../httpClient.js";


const baseURL = "/o"
const endpoint = {

  // Profile APIs
  getUserProfile: `${baseURL}/profile`,
  updateUserProfile: `${baseURL}/profile/update`,
  // Dashboard APIs
  getOverview: (year) => `${baseURL}/overview/annual?year=${year}`,
  getRecentActivity: `${baseURL}/activity`,
  getTopPaymentServices: `${baseURL}/services/top`,
  getBankCountries: `${baseURL}/bank/countries`,
  verifyBankAccount: `${baseURL}/bank/resolve`,
  addBankDetails: `${baseURL}/bank/details/add`,
  getBankDetails: `${baseURL}/bank/details`,
  getBankAvailable: `${baseURL}/bank/available`,
  deleteBankDetail: (id) => `${baseURL}/bank/details/i/${id}/delete`,
  editBankDetails: (id) => `${baseURL}/bank/details/i/${id}/update`,
  createPaymentService: `${baseURL}/services/create`,
  getPaymentServices: `${baseURL}/services`,
  viewPaymentService: (id) => `${baseURL}/services/s/${id}`,
  editPaymentService: (id) => `${baseURL}/services/s/${id}/update`,
  deletePaymentService: (id) => `${baseURL}/services/s/${id}/delete`,
  getServicePayments: (id) => `${baseURL}/services/s/${id}/payments`,
  getSubscribers: `${baseURL}/subscribers`,
};

export async function getOrgOverviewApi(year, token) {
  
  return await httpRequest(endpoint.getOverview(year), {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgRecentActivityApi(limit, token) {
  return await httpRequest(`${endpoint.getRecentActivity}?limit=${limit}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgTopPaymentServicesApi(token) {
  return await httpRequest(endpoint.getTopPaymentServices, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgBankCountriesApi(token) {
  return await httpRequest(endpoint.getBankCountries, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function verifyOrgBankAccountApi(accountNumber, bankCode, token) {
  return await httpRequest(`${endpoint.verifyBankAccount}?accountNumber=${accountNumber}&bankCode=${bankCode}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function addOrgBankDetailsApi(payload, token) {
  return await httpRequest(endpoint.addBankDetails, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function getOrgBankDetailsApi(token) {
  return await httpRequest(endpoint.getBankDetails, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgBankAvailableApi(country, token) {
  return await httpRequest(`${endpoint.getBankAvailable}?country=${country}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function deleteOrgBankDetailApi(id, token) {
  return await httpRequest(endpoint.deleteBankDetail(id), {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function editOrgBankDetailsApi(id, payload, token) {
  return await httpRequest(endpoint.editBankDetails(id), {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function createOrgPaymentServiceApi(payload, token) {
  return await httpRequest(endpoint.createPaymentService, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function getOrgPaymentServicesApi(token) {
  return await httpRequest(endpoint.getPaymentServices, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function viewOrgPaymentServiceApi(id, token) {
  return await httpRequest(endpoint.viewPaymentService(id), {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function editOrgPaymentServiceApi(id, payload, token) {
  return await httpRequest(endpoint.editPaymentService(id), {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function deleteOrgPaymentServiceApi(id, token) {
  return await httpRequest(endpoint.deletePaymentService(id), {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgServicePaymentsApi(id, page, limit, token) {
  return await httpRequest(`${endpoint.getServicePayments(id)}?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgSubscribersApi(token) {
  return await httpRequest(endpoint.getSubscribers, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function getOrgProfileApi(token) {
  return await httpRequest(endpoint.getUserProfile, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}

export async function updateOrgProfileApi(payload, token) {
  return await httpRequest(endpoint.updateUserProfile, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}