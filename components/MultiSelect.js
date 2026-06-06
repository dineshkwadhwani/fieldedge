'use client';
import { useState, useRef, useEffect } from 'react';

export default function MultiSelect({ options, value = [], onChange, placeholder = 'Select...' }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = options.filter(o =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id) => {
    if (value.includes(id)) {
      onChange(value.filter(v => v !== id));
    } else {
      onChange([...value, id]);
    }
  };

  const selectedLabels = value.map(v => options.find(o => o.value === v)).filter(Boolean);

  return (
    <div className="multiselect-container" ref={ref}>
      <div className="multiselect-tags" onClick={() => setOpen(!open)} tabIndex={0}>
        {selectedLabels.length === 0 && (
          <span style={{ fontSize: 14, color: 'var(--fe-gray-400)' }}>{placeholder}</span>
        )}
        {selectedLabels.map(o => (
          <span key={o.value} className="tag-chip">
            {o.label}
            <button type="button" onClick={(e) => { e.stopPropagation(); toggle(o.value); }}>×</button>
          </span>
        ))}
      </div>
      {open && (
        <div className="multiselect-dropdown">
          <div style={{ padding: '8px 10px', borderBottom: '0.5px solid var(--fe-gray-100)' }}>
            <input
              autoFocus
              className="fe-input"
              style={{ padding: '6px 10px', fontSize: 13 }}
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              onClick={e => e.stopPropagation()}
            />
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: '12px', fontSize: 13, color: 'var(--fe-gray-400)', textAlign: 'center' }}>No results</div>
          )}
          {filtered.map(o => (
            <div
              key={o.value}
              className={`multiselect-option ${value.includes(o.value) ? 'selected' : ''}`}
              onClick={() => toggle(o.value)}
            >
              <div style={{ width: 16, height: 16, border: `1.5px solid ${value.includes(o.value) ? 'var(--fe-teal-400)' : 'var(--fe-gray-200)'}`, borderRadius: 4, background: value.includes(o.value) ? 'var(--fe-teal-400)' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {value.includes(o.value) && <i className="ti ti-check" style={{ fontSize: 11, color: 'white' }} />}
              </div>
              <div>
                <div style={{ fontSize: 13 }}>{o.label}</div>
                {o.sub && <div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>{o.sub}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
