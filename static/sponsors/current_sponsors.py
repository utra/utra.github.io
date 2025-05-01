import csv

def generate_html(csv_file_path, output_file_path):
    try:
        with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
            reader = csv.reader(csv_file)
            html_output = []

            for row in reader:
                if len(row) < 3:
                    print(f"Skipping invalid row: {row}")
                    continue

                B = row[1]
                C = row[2]

                html_output.append(f'''
<div class="col-lg-4 col-md-6 mb-20">
    <div class="blog-item">
        <a href="{B}">
            <div class="blog-thumb" style="display: flex; justify-content: center; align-items: center; padding: 10px; background-color: #f9f9f9;">
                <img src="static/images/logo_sponsors/{C}" alt="img" style="width: 100%; height: auto; object-fit: contain;">
            </div>
        </a>
    </div>
</div>
''')

            with open(output_file_path, mode='w', encoding='utf-8') as output_file:
                output_file.write("\n".join(html_output))

            print(f"HTML output successfully written to {output_file_path}")

    except FileNotFoundError:
        print(f"Error: The file {csv_file_path} was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")


generate_html('current_sponsors.csv', 'current_sponsors_output.html')