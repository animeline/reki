import os
import discord
from discord.ext import commands 

from dotenv import load_dotenv

load_dotenv()

def custom_prefix(bot, msg: discord.Message):
  user_id = bot.user.id
  base = [f'<@!{user_id}> ', f'<@{user_id}> ']
  
  if msg.guild is None:
    base.append('rk!')
    base.append('r$')
    
  return base

class Reki(commands.AutoShardedBot):
  def __init__(self):
    intents = discord.Intents(
      messages=True,
    )
  
    super().__init__(
      command_prefix=custom_prefix,
      intents=intents
    )
  
  async def setup_cogs(self):
    cogs = [c[:-3] for c in os.listdir('cogs') if c.endswith('.py')]
    total_cogs = len(cogs)
    
    for i, cog in enumerate(cogs, 1):
      try:
        self.load_extension('cogs.' + cog)
      except Exception as e:
        print(f'Failed to load Cog \'{cog}\':')
      else:
        print(f'Cog {cog} successfully loaded. ({i}/{total_cogs})')
        
        
  async def on_ready(self):
    await self.setup_cogs()
    
    print(f'Ready: {self.user} (ID: {self.user.id})')
    
  async def on_message(self, message):
    ctx = await self.get_context(message)
    
    if ctx.command is None:
      return
    
    await self.invoke(ctx)
  
  def run(self):
    super().run(os.environ['DISCORD_TOKEN'])

if __name__ == '__main__':
  bot = Reki()
  bot.run()
  