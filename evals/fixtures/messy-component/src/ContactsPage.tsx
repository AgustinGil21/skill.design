import { useEffect, useState, useMemo, useCallback } from 'react';

// Contacts page component
export default function ContactsPage() {
  // State for contacts
  const [contacts, setContacts] = useState<any[]>([]);
  // State for loading
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<any[]>([]);

  // Fetch contacts
  useEffect(() => {
    fetch('/api/contacts').then((r) => r.json()).then((data) => {
      setContacts(data);
      setLoading(false);
    });
  }, []);

  // Filter contacts when search changes
  useEffect(() => {
    setFiltered(contacts.filter((c) => c.name.toLowerCase().includes(search.toLowerCase())));
  }, [contacts, search]);

  // Handle the search change
  const handleSearch = useCallback((e: any) => setSearch(e.target.value), []);

  const total = useMemo(() => filtered.length, [filtered]);

  return (
    <div className="p-[22px] max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-[24px]">
        <h1 className="text-[28px] font-bold text-[#1a1a2e]">Contacts ({total})</h1>
        <div className="bg-[#7c3aed] text-white rounded-[10px] px-[16px] py-[8px]" onClick={() => alert('TODO')}>New contact</div>
      </div>
      {/* Search */}
      <input className="border rounded-[8px] p-[10px] w-full mb-[16px]" placeholder="Search" onChange={handleSearch} />
      {/* List */}
      {loading ? <div>Loading...</div> : (
        <div>
          {filtered.map((c, i) => (
            <div key={i} className="flex gap-[12px] p-[16px] border-b">
              <div className="w-[40px] h-[40px] rounded-full bg-[#e9d5ff]" />
              <div>
                <div className="font-semibold">{c.name}</div>
                <div className="text-[13px] text-[#9ca3af]">{c.email}</div>
                <div dangerouslySetInnerHTML={{ __html: c.notes }} />
              </div>
              {/* TODO: implement edit */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
