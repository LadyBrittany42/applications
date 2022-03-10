
    const length = parseInt(prompt("Enter length"));
    const width = parseInt(prompt("Enter width"));
    const area = length * width;
    const perimeter = (2 * length) + (2 * width);
    
    const html = `<p><label>Length: </label>${length}</p><p><label>Width: </label>${width}</p><p><label>Area: </label>${area} </p><p><label>Perimeter: </label>${perimeter}</p>`;
    document.write(html);
   
