// Mock user data and functions for Veriss Payments

const mockPayments = [
  {
    id: 1,
    userId: 1,
    orgId: 1,
    serviceId: 1,
    serviceTitle: 'Annual Dues 2025',
    amount: 2000,
    status: 'paid',
    paymentDate: '2024-01-15',
    transactionId: 'TXN123456',
    receiptId: 'RCP001',
    paymentMethod: 'Paystack',
    payerName: 'John Doe',
    payerEmail: 'user@example.com'
  },
  {
    id: 2,
    userId: 1,
    orgId: 1,
    serviceId: 2,
    serviceTitle: 'Workshop Registration',
    amount: 5000,
    status: 'paid',
    paymentDate: '2024-02-20',
    transactionId: 'TXN789012',
    receiptId: 'RCP002',
    paymentMethod: 'Paystack',
    payerName: 'John Doe',
    payerEmail: 'user@example.com'
  },
  {
    id: 3,
    userId: 1,
    orgId: 1,
    serviceId: 1,
    serviceTitle: 'Annual Dues 2025',
    amount: 2000,
    status: 'pending',
    paymentDate: null,
    transactionId: null,
    receiptId: null
  },
  {
    id: 4,
    userId: 1,
    orgId: 1,
    serviceId: 3,
    serviceTitle: 'License Renewal 2024',
    amount: 3000,
    status: 'paid',
    paymentDate: '2024-03-10',
    transactionId: 'TXN345678',
    receiptId: 'RCP003',
    paymentMethod: 'Paystack',
    payerName: 'John Doe',
    payerEmail: 'user@example.com'
  },
  {
    id: 5,
    userId: 1,
    orgId: 1,
    serviceId: 4,
    serviceTitle: 'Conference Registration 2024',
    amount: 7500,
    status: 'paid',
    paymentDate: '2024-04-05',
    transactionId: 'TXN456789',
    receiptId: 'RCP004',
    paymentMethod: 'Paystack',
    payerName: 'John Doe',
    payerEmail: 'user@example.com'
  },
  {
    id: 6,
    userId: 1,
    orgId: 1,
    serviceId: 5,
    serviceTitle: 'Professional Development Course',
    amount: 4500,
    status: 'paid',
    paymentDate: '2024-05-12',
    transactionId: 'TXN567890',
    receiptId: 'RCP005',
    paymentMethod: 'Paystack',
    payerName: 'John Doe',
    payerEmail: 'user@example.com'
  }
];

// Mock user subscriptions
const mockUserSubscriptions = [
  {
    userId: 1,
    orgId: 1,
    orgName: 'Veriss Medical Association',
    subscribedDate: '2024-01-01',
    status: 'active'
  }
];

function getUserPayments(userId) {
  return mockPayments.filter(p => p.userId === userId);
}

function getUserSubscriptions(userId) {
  return mockUserSubscriptions.filter(s => s.userId === userId && s.status === 'active');
}

function getOrganizationServices(orgId) {
  // Get payment services from organization
  const org = getOrganization(orgId);
  if (!org) return [];

  // Mock payment services - in real app, this would come from org data
  return [
    {
      id: 1,
      orgId: 1,
      title: 'Annual Dues 2025',
      description: 'Annual membership dues for all registered members for the 2025 fiscal year.',
      amount: 2000,
      status: 'active',
      endDate: '2025-12-31',
      paymentWindow: 'dates',
      startDate: '2025-01-01',
      audience: 'subscribers',
      collectFields: {
        fullName: true,
        email: true,
        phone: true,
        idNumber: false
      },
      customFields: [],
      fileRequirements: []
    },
    {
      id: 2,
      orgId: 1,
      title: 'Workshop Registration',
      description: 'Registration fee for the annual professional development workshop.',
      amount: 5000,
      status: 'active',
      endDate: '2025-11-30',
      paymentWindow: 'dates',
      startDate: '2025-10-01',
      audience: 'public',
      collectFields: {
        fullName: true,
        email: true,
        phone: true,
        idNumber: true,
        ticketType: true
      },
      customFields: [
        { label: 'Workshop Track', type: 'text', required: true }
      ],
      fileRequirements: [
        { label: 'Professional Certificate', acceptedTypes: ['pdf', 'jpg', 'png'], maxSize: 5, required: true }
      ]
    }
  ].filter(s => s.orgId === orgId && s.status === 'active');
}

function subscribeToOrganization(userId, orgId) {
  const existing = mockUserSubscriptions.find(s => s.userId === userId && s.orgId === orgId);
  if (existing) {
    if (existing.status === 'inactive') {
      existing.status = 'active';
      existing.subscribedDate = new Date().toISOString().split('T')[0];
      return existing;
    }
    return null; // Already subscribed
  }

  const org = getOrganization(orgId);
  const newSubscription = {
    userId,
    orgId,
    orgName: org ? org.name : 'Unknown Organization',
    subscribedDate: new Date().toISOString().split('T')[0],
    status: 'active'
  };
  mockUserSubscriptions.push(newSubscription);
  return newSubscription;
}

function unsubscribeFromOrganization(userId, orgId) {
  const subscription = mockUserSubscriptions.find(s => s.userId === userId && s.orgId === orgId);
  if (subscription) {
    subscription.status = 'inactive';
    subscription.unsubscribedDate = new Date().toISOString().split('T')[0];
    return true;
  }
  return false;
}

function getDueByEmail(email) {
  // Mock search for dues by email
  // In real app, find user by email
  const org = getOrganization(1); // Assume org 1 for demo
  return org ? org.dues : [];
}

function makePayment(paymentData) {
  // Mock payment processing
  const newPayment = {
    ...paymentData,
    id: Date.now(),
    status: 'paid',
    paymentDate: new Date().toISOString().split('T')[0],
    transactionId: 'TXN' + Date.now(),
    receiptId: 'RCP' + String(Date.now()).slice(-6)
  };
  mockPayments.push(newPayment);
  return newPayment;
}

function getPaymentRecords(userId) {
  return getUserPayments(userId);
}

function generateReceipt(paymentId) {
  const payment = mockPayments.find(p => p.id === paymentId);
  if (!payment) return null;

  const org = getOrganization(payment.orgId);
  return {
    receiptId: payment.receiptId,
    transactionId: payment.transactionId,
    paymentDate: payment.paymentDate,
    amount: payment.amount,
    serviceTitle: payment.serviceTitle,
    orgName: org ? org.name : 'Unknown Organization',
    status: 'paid',
    paymentMethod: payment.paymentMethod || 'Paystack',
    payerName: payment.payerName || 'N/A',
    payerEmail: payment.payerEmail || 'N/A',
    orgAddress: org ? (org.address || 'N/A') : 'N/A',
    orgPhone: org ? (org.adminOfficer?.phone || 'N/A') : 'N/A',
    orgEmail: org ? (org.adminOfficer?.email || 'N/A') : 'N/A'
  };
}

function downloadReceiptPDF(receipt) {
  // Generate PDF content (mock - in real app, use a PDF library)
  const pdfContent = `
PAYMENT RECEIPT
================================

Receipt ID: ${receipt.receiptId}
Transaction ID: ${receipt.transactionId}
Date: ${receipt.paymentDate}

Organization: ${receipt.orgName}
Service: ${receipt.serviceTitle}

Payer Information:
Name: ${receipt.payerName}
Email: ${receipt.payerEmail}

Payment Details:
Amount: ₦${receipt.amount.toLocaleString()}
Payment Method: ${receipt.paymentMethod}
Status: ${receipt.status}

This receipt serves as proof of payment.
Generated on: ${new Date().toLocaleString()}
  `.trim();

  return pdfContent;
}