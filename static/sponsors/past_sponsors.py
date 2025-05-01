import csv

def generate_html(csv_file_path, output_file_path):
    try:
        with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
            reader = csv.reader(csv_file)
            names = []

            for row in reader:
                if len(row) < 1:
                    print(f"Skipping invalid row: {row}")
                    continue

                A = row[0]
                names.append(A)

            # Sort names alphabetically
            names.sort(key=lambda x: x.lower())

            html_output = []
            for name in names:
                html_output.append(f'''
<div class="member">
    <div class="member-name">{name}</div>
</div>
''')

            with open(output_file_path, mode='w', encoding='utf-8') as output_file:
                output_file.write("\n".join(html_output))

            print(f"HTML output successfully written to {output_file_path}")

    except FileNotFoundError:
        print(f"Error: The file {csv_file_path} was not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

generate_html('past_sponsors.csv', 'past_sponsors_output.html')