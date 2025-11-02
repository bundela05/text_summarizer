import requests as r

ollama_url = "http://localhost:11434/api/generate"

def query_deepseek(prompt):
    payload = {
        "model": "deepseek-r1:1.5b" ,
        "prompt": prompt,
        "stream": False
    }

    response = r.post(ollama_url, json=payload)
    if response.status_code == 200:
        return response.json().get("response", "no output")
    else:
        return f"Error: {response.text}"

text="""Elara was a cartographer in a world that had forgotten its maps. The Great Blurring, a magical, chaotic event decades ago, had shifted mountains, rerouted rivers, and made every existing atlas a beautiful, useless relic. Now, people relied on fragmented folk songs and shaky memories to navigate the lands of Veridia.
She lived alone in the city of Arken's ancient, dust-choked library, surrounded by the ghosts of accurate geography. Her only companion was a small, erratic compass her grandmother had given her. It didn't point north; it merely spun wildly until it occasionally settled on a direction for a single, fleeting second.
One stormy evening, a frantic knock echoed through the library. A farmer stood on the steps, his face etched with worry. "The Elder's Spring," he gasped, "It's gone! We've relied on it for generations, and now it's just... dry earth. The village will starve by winter."
Elara knew the Elder's Spring. It was supposed to be due east of Arken. She pulled out her parchment, charcoal, and the unreliable compass.""" 
text2="who made you?"
text3="give me a story"
k=True
if(k==False):
    print(query_deepseek(f"summarise in bullet point format: {text}"))
else:
    print(query_deepseek(f"summarise in paragraph format: {text}"))