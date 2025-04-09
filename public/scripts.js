const fetchResults = async () => {
    const scope = document.getElementById('scope').value;
    const wcaId = document.getElementById('wcaId').value;
    const response = await fetch(`/api/rankings?scope=${scope}&wcaId=${wcaId}`);
    const data = await response.json();
    document.getElementById('results').innerHTML = JSON.stringify(data, null, 2);
}