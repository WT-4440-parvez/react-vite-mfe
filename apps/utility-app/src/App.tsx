import { useState } from 'react';
import { Button, Card, Input, Modal, Table, Tabs } from './components';
import { sampleUsers } from './data/tableData';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmallModal, setIsSmallModal] = useState(false);
  const [isLargeModal, setIsLargeModal] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');

  return (
    <div className="app">
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <h1>🎨 Utility Components Library</h1>
          <p className="subtitle">
            Professional, reusable React components for modern micro-frontend architecture
          </p>
          <span className="version-badge">v1.0.0 • TypeScript • Vite</span>
        </div>

        {/* Components Grid */}
        <div className="components-grid">
          {/* Button Component */}
          <div className="component-card-wrapper">
            <Card
              title="Button Component"
              subtitle="Flexible buttons with multiple variants, sizes, and states"
              bordered
              hoverable
            >
              <div className="component-showcase">
                <div>
                  <strong style={{ display: 'block', marginBottom: '12px', color: '#555' }}>
                    Variants
                  </strong>
                  <div className="variants-display">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="danger">Danger</Button>
                  </div>
                </div>

                <div className="component-divider"></div>

                <div>
                  <strong style={{ display: 'block', marginBottom: '12px', color: '#555' }}>
                    Sizes
                  </strong>
                  <div className="size-display">
                    <Button variant="primary" size="small">Small</Button>
                    <Button variant="primary" size="medium">Medium</Button>
                    <Button variant="primary" size="large">Large</Button>
                  </div>
                </div>

                <div className="component-divider"></div>

                <div>
                  <strong style={{ display: 'block', marginBottom: '12px', color: '#555' }}>
                    States
                  </strong>
                  <div className="variants-display">
                    <Button variant="primary" loading>Loading...</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                    <Button variant="success" fullWidth>Full Width Button</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Card Component */}
          <div className="component-card-wrapper">
            <Card
              title="Card Component"
              subtitle="Versatile container with header, body, and footer sections"
              bordered
              hoverable
            >
              <div className="component-showcase">
                <Card
                  title="Standard Card"
                  subtitle="With title and subtitle"
                  bordered
                  style={{ marginBottom: '16px' }}
                >
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    This is a standard card component with a title, subtitle, and content area.
                    Perfect for displaying grouped information.
                  </p>
                </Card>

                <Card
                  title="Hoverable Card"
                  bordered
                  hoverable
                  footer={
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <Button variant="primary" size="small">Action</Button>
                      <Button variant="secondary" size="small">Cancel</Button>
                    </div>
                  }
                >
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Cards can be hoverable and include custom footers with actions.
                  </p>
                </Card>
              </div>
            </Card>
          </div>

          {/* Input Component */}
          <div className="component-card-wrapper">
            <Card
              title="Input Component"
              subtitle="Form inputs with labels, validation, and helper text"
              bordered
              hoverable
            >
              <div className="component-showcase">
                <div className="input-group">
                  <Input
                    label="Username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    helperText="Choose a unique username"
                    fullWidth
                  />
                </div>

                <div className="input-group">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    helperText="We'll never share your email with anyone"
                    fullWidth
                  />
                </div>

                <div className="input-group">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={password && password.length < 6 ? "Password must be at least 6 characters" : undefined}
                    fullWidth
                  />
                </div>

                <div className="input-row">
                  <Input
                    label="First Name"
                    placeholder="John"
                  />
                  <Input
                    label="Last Name"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Modal Component */}
          <div className="component-card-wrapper">
            <Card
              title="Modal Component"
              subtitle="Accessible, keyboard-navigable dialog modals"
              bordered
              hoverable
            >
              <div className="component-showcase">
                <div>
                  <strong style={{ display: 'block', marginBottom: '12px', color: '#555' }}>
                    Modal Sizes
                  </strong>
                  <div className="modal-demo-section">
                    <Button variant="primary" onClick={() => setIsSmallModal(true)}>
                      Small Modal
                    </Button>
                    <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                      Medium Modal
                    </Button>
                    <Button variant="primary" onClick={() => setIsLargeModal(true)}>
                      Large Modal
                    </Button>
                  </div>
                </div>

                <div className="component-divider"></div>

                <div style={{ background: '#f8f9fa', padding: '16px', borderRadius: '6px' }}>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                    ✨ <strong>Features:</strong> Click outside to close, ESC key support, 
                    custom footers, smooth animations, and focus management.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="component-card-wrapper" style={{ animationDelay: '0.5s', gridColumn: '1 / -1' }}>
          <Card
            title="🚀 Component Features"
            bordered
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', padding: '8px 0' }}>
              <div>
                <h3 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '8px', fontWeight: 600 }}>TypeScript</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  Fully typed with comprehensive interfaces for all props and events.
                </p>
              </div>
              <div>
                <h3 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '8px', fontWeight: 600 }}>Accessible</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  Built with ARIA labels, keyboard navigation, and screen reader support.
                </p>
              </div>
              <div>
                <h3 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '8px', fontWeight: 600 }}>Customizable</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  Flexible props and CSS variables for easy theming and customization.
                </p>
              </div>
              <div>
                <h3 style={{ color: '#1e293b', fontSize: '18px', marginBottom: '8px', fontWeight: 600 }}>Performant</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>
                  Optimized with React best practices, memo, and efficient rendering.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Table Showcase - Full Width */}
        <div className="component-card-wrapper" style={{ gridColumn: '1 / -1', marginTop: '30px' }}>
          <Card title="📊 Employee Directory" subtitle="Sortable & filterable industrial table with advanced features" bordered hoverable>
            <div style={{ overflowX: 'auto', marginTop: '12px' }}>
              <Table
                columns={[
                  { key: 'id', label: 'ID', sortable: true, filterable: true, width: 'w-16' },
                  { key: 'name', label: 'Name', sortable: true, filterable: true },
                  { key: 'email', label: 'Email', sortable: true, filterable: true },
                  { key: 'role', label: 'Role', sortable: true, filterable: true },
                  {
                    key: 'status',
                    label: 'Status',
                    sortable: true,
                    filterable: true,
                    render: (val: string) => (
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        val === 'Active' ? 'bg-green-100 text-green-800' : val === 'Inactive' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {val}
                      </span>
                    ),
                  },
                  { key: 'joinDate', label: 'Join Date', sortable: true, filterable: true },
                  { key: 'salary', label: 'Salary', sortable: true, filterable: false, render: (v: number) => `$${v.toLocaleString()}` },
                ]}
                data={sampleUsers}
                rowKey="id"
                striped
                hover
              />
            </div>
          </Card>
        </div>
        <Card>
          <div className="mt-6">
            <Tabs
              items={[
                { key: 'overview', label: 'Overview', content: <div>Overview content goes here</div> },
                { key: 'executions', label: 'Executions', content: <div>Executions table or chart</div> },
                { key: 'settings', label: 'Settings', content: <div>Settings controls</div> },
              ]}
            />
          </div>
        </Card>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isSmallModal}
        onClose={() => setIsSmallModal(false)}
        title="Small Modal"
        size="small"
        footer={
          <Button variant="primary" onClick={() => setIsSmallModal(false)}>
            Close
          </Button>
        }
      >
        <p>This is a small modal, perfect for simple confirmations or brief messages.</p>
      </Modal>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Medium Modal Example"
        size="medium"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
          This is a medium-sized modal component that can be used across your
          micro-frontend applications. It supports different sizes, custom
          footers, and keyboard navigation.
        </p>
        <Input
          label="Your Name"
          placeholder="Enter your name"
          fullWidth
        />
      </Modal>

      <Modal
        isOpen={isLargeModal}
        onClose={() => setIsLargeModal(false)}
        title="Large Modal with Form"
        size="large"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsLargeModal(false)}>
              Cancel
            </Button>
            <Button variant="success" onClick={() => setIsLargeModal(false)}>
              Submit Form
            </Button>
          </>
        }
      >
        <div style={{ display: 'grid', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Input label="First Name" placeholder="John" fullWidth />
            <Input label="Last Name" placeholder="Doe" fullWidth />
          </div>
          <Input label="Email" type="email" placeholder="john.doe@example.com" fullWidth />
          <Input label="Phone" placeholder="+1 (555) 000-0000" fullWidth />
          <Input
            label="Message"
            placeholder="Enter your message..."
            fullWidth
          />
        </div>
      </Modal>
    </div>
  );
}

export default App;
