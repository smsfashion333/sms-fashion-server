export const adminOrderPlacedEmailTemplate = (orderId: string, text: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Order Alert - Admin</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid #eaeaea;
        }
        
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 30px;
          text-align: center;
          color: white;
        }
        
        .logo {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
          margin-bottom: 10px;
        }
        
        .logo-subtitle {
          font-size: 16px;
          opacity: 0.9;
          font-weight: 400;
        }
        
        .admin-badge {
          background-color: #fbbf24;
          color: #1a202c;
          padding: 8px 16px;
          border-radius: 20px;
          display: inline-block;
          margin-top: 15px;
          font-weight: 600;
          font-size: 14px;
        }
        
        .content {
          padding: 40px 30px;
          color: #333333;
        }
        
        .title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #2d3748;
        }
        
        .order-number {
          font-size: 18px;
          color: #667eea;
          font-weight: 500;
          margin-bottom: 25px;
        }
        
        .stats-grid {
          display: flex;
          gap: 15px;
          margin: 30px 0;
        }
        
        .stat-card {
          flex: 1;
          background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          border: 1px solid #e2e8f0;
        }
        
        .stat-label {
          font-size: 14px;
          color: #718096;
          margin-bottom: 8px;
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .stat-sub {
          font-size: 12px;
          color: #a0aec0;
          margin-top: 5px;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #2d3748;
          margin: 30px 0 20px 0;
          padding-bottom: 10px;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .customer-info {
          background-color: #f7fafc;
          border-radius: 10px;
          padding: 20px;
          margin: 20px 0;
          border: 1px solid #e2e8f0;
        }
        
        .info-row {
          display: flex;
          margin-bottom: 12px;
          font-size: 15px;
        }
        
        .info-label {
          width: 100px;
          color: #718096;
          font-weight: 500;
        }
        
        .info-value {
          flex: 1;
          color: #2d3748;
          font-weight: 500;
        }
        
        .address-box {
          background-color: #f0f9ff;
          border-left: 4px solid #3b82f6;
          padding: 20px;
          margin: 20px 0;
          border-radius: 0 8px 8px 0;
        }
        
        .address-box p {
          margin: 5px 0;
          color: #4b5563;
          line-height: 1.6;
        }
        
        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        
        .items-table th {
          text-align: left;
          padding: 12px;
          background-color: #f7fafc;
          color: #4a5568;
          font-weight: 600;
          font-size: 14px;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .items-table td {
          padding: 15px 12px;
          border-bottom: 1px solid #e2e8f0;
          color: #4a5568;
        }
        
        .item-details {
          font-size: 14px;
        }
        
        .item-variant {
          font-size: 12px;
          color: #718096;
          margin-top: 4px;
        }
        
        .item-variant span {
          background-color: #edf2f7;
          padding: 2px 8px;
          border-radius: 12px;
          display: inline-block;
          margin-right: 5px;
        }
        
        .total-section {
          background-color: #f7fafc;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          color: #4a5568;
        }
        
        .total-row.grand-total {
          border-top: 2px solid #e2e8f0;
          margin-top: 8px;
          padding-top: 15px;
          font-size: 18px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .payment-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          background-color: #c6f6d5;
          color: #22543d;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          margin: 30px 0;
        }
        
        .action-button {
          flex: 1;
          padding: 15px;
          text-align: center;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          color: white;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          cursor: pointer;
        }
        
        .action-button.secondary {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }
        
        .footer {
          background-color: #f8f9fa;
          padding: 30px;
          text-align: center;
          color: #718096;
          font-size: 14px;
          border-top: 1px solid #e2e8f0;
        }
        
        .urgent-badge {
          background-color: #fef3c7;
          color: #92400e;
          padding: 12px;
          border-radius: 8px;
          margin: 20px 0;
          font-size: 14px;
          text-align: center;
          border: 1px solid #fde68a;
        }
        
        .divider {
          height: 1px;
          background-color: #e2e8f0;
          margin: 30px 0;
        }
        
        @media (max-width: 600px) {
          .header {
            padding: 30px 20px;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .stats-grid {
            flex-direction: column;
          }
          
          .items-table {
            font-size: 14px;
          }
          
          .items-table td, .items-table th {
            padding: 10px 8px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">🦀 Crab Fashion</div>
          <div class="logo-subtitle">Admin Notification</div>
          <div class="admin-badge">🔔 New Order Received</div>
        </div>
        
        <div class="content">
          <h1 class="title">New Order Alert!</h1>
          <div class="order-number">Order #${orderId}</div>
          
          <div class="urgent-badge">
            ⚡ This order requires processing within 24 hours
          </div>

          <div>${text}</div>
          
          <div class="divider"></div>
          
          <div class="action-buttons">
            <a href="https://admin.crabfashion.com/orders/${orderId}" class="action-button">
              View Order Details
            </a>
            <a href="https://admin.crabfashion.com/orders/${orderId}/process" class="action-button secondary">
              Mark as Processing
            </a>
          </div>
          
          <div class="info-box" style="background-color: #fefcbf; border-left-color: #d69e2e;">
            <p><strong>📋 Next Steps:</strong></p>
            <p>• Verify payment status</p>
            <p>• Confirm inventory availability</p>
            <p>• Prepare items for shipping</p>
            <p>• Update customer on order status</p>
          </div>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Crab Fashion Admin. All rights reserved.</p>
          <p style="margin-top: 10px; font-size: 13px; color: #a0aec0;">
            This is an automated notification for new orders. Please process promptly.
          </p>
        </div>
      </div>
    </body>
    </html>
    `;
